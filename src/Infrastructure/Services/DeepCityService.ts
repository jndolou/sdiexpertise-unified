interface DeepCityPropertyData {
  type_bien: string | null;
  surface: number | null;
  annee_construction: string | null;
  adresse: string;
}

interface CadastreApiResponse {
  features?: Array<{
    properties?: {
      idu?: string;
    };
  }>;
}

interface DeepCityPropertyResponse {
  properties?: Array<{
    energy?: {
      residential?: Array<{
        buildingType?: string;
        habitableHousingSurface?: number;
        habitableBuildingSurface?: number;
        constructionPeriod?: string;
      }>;
    };
    buildings?: Array<{
      building?: {
        constructionYear?: number;
        usage?: string;
        footprintArea?: number;
      };
    }>;
    transactions?: Array<{
      localType?: string;
      totalSurface?: number;
      mutationDate?: string;
    }>;
  }>;
}

export class DeepCityService {
  private readonly BASE_URL = 'https://api.deepcity.fr/v1';

  async getPropertyData(address: string): Promise<DeepCityPropertyData> {
    try {
      const parcelId = await this.geocodeAddress(address);

      if (!parcelId) {
        return this.getEmptyResponse(address);
      }

      const propertyData = await this.getPropertyByCoordinates(parcelId);

      return {
        type_bien: this.extractPropertyType(propertyData),
        surface: this.extractSurface(propertyData),
        annee_construction: this.extractConstructionYear(propertyData),
        adresse: address,
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des données DeepCity:', error);
      return this.getEmptyResponse(address);
    }
  }

  private async geocodeAddress(address: string): Promise<string | null> {
    try {
      console.log('🔍 Geocoding address:', address);

      const banResponse = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
      );

      if (!banResponse.ok) {
        console.error('❌ BAN API error:', banResponse.status, banResponse.statusText);
        return null;
      }

      const banData = await banResponse.json();
      const coordinates = banData.features?.[0]?.geometry?.coordinates;

      if (!coordinates || coordinates.length !== 2) {
        console.error('❌ No coordinates found for address');
        return null;
      }

      console.log('✅ Coordinates found:', coordinates);

      const [lon, lat] = coordinates;
      const geomParam = encodeURIComponent(JSON.stringify({
        type: 'Point',
        coordinates: [lon, lat]
      }));

      console.log('🗺️ Fetching cadastral parcel ID...');

      const cadastreResponse = await fetch(
        `https://apicarto.ign.fr/api/cadastre/parcelle?geom=${geomParam}`
      );

      if (!cadastreResponse.ok) {
        console.error('❌ Cadastre API error:', cadastreResponse.status, cadastreResponse.statusText);
        return null;
      }

      const cadastreData: CadastreApiResponse = await cadastreResponse.json();
      const parcelId = cadastreData.features?.[0]?.properties?.idu;

      if (!parcelId) {
        console.error('❌ No parcel ID found');
        return null;
      }

      console.log('✅ Parcel ID found:', parcelId);
      return parcelId;
    } catch (error) {
      console.error('❌ Erreur geocoding:', error);
      return null;
    }
  }

  private async getPropertyByCoordinates(
    parcelId: string
  ): Promise<DeepCityPropertyResponse | null> {
    try {
      console.log('🏠 Fetching property data for parcel:', parcelId);

      const url = `${this.BASE_URL}/properties?parcel_id=${encodeURIComponent(parcelId)}`;
      console.log('📡 Request URL:', url);

      const response = await fetch(url);

      if (!response.ok) {
        console.error('❌ DeepCity API error:', response.status, response.statusText);
        const errorText = await response.text();
        console.error('Error details:', errorText);
        return null;
      }

      const data = await response.json();
      console.log('✅ Property data received:', data);
      return data;
    } catch (error) {
      console.error('❌ Erreur récupération données propriété:', error);
      return null;
    }
  }

  private extractPropertyType(data: DeepCityPropertyResponse | null): string | null {
    if (!data || !data.properties || data.properties.length === 0) return null;

    const property = data.properties[0];

    if (property.energy?.residential?.[0]?.buildingType) {
      return this.normalizePropertyType(property.energy.residential[0].buildingType);
    }

    if (property.buildings?.[0]?.building?.usage) {
      return this.normalizePropertyType(property.buildings[0].building.usage);
    }

    if (property.transactions?.[0]?.localType) {
      return this.normalizePropertyType(property.transactions[0].localType);
    }

    return null;
  }

  private extractSurface(data: DeepCityPropertyResponse | null): number | null {
    if (!data || !data.properties || data.properties.length === 0) return null;

    const property = data.properties[0];

    if (property.energy?.residential?.[0]?.habitableHousingSurface) {
      return Math.round(property.energy.residential[0].habitableHousingSurface);
    }

    if (property.energy?.residential?.[0]?.habitableBuildingSurface) {
      return Math.round(property.energy.residential[0].habitableBuildingSurface);
    }

    if (property.transactions?.[0]?.totalSurface) {
      return property.transactions[0].totalSurface;
    }

    if (property.buildings?.[0]?.building?.footprintArea) {
      return Math.round(property.buildings[0].building.footprintArea);
    }

    return null;
  }

  private extractConstructionYear(data: DeepCityPropertyResponse | null): string | null {
    if (!data || !data.properties || data.properties.length === 0) return null;

    const property = data.properties[0];

    if (property.energy?.residential?.[0]?.constructionPeriod) {
      return property.energy.residential[0].constructionPeriod;
    }

    if (property.buildings?.[0]?.building?.constructionYear) {
      return String(property.buildings[0].building.constructionYear);
    }

    if (property.transactions?.[0]?.mutationDate) {
      const year = new Date(property.transactions[0].mutationDate).getFullYear();
      return String(year);
    }

    return null;
  }

  private normalizePropertyType(type: string): string {
    const normalized = type.toLowerCase();

    if (normalized.includes('appartement') || normalized.includes('apartment')) {
      return 'Appartement';
    }

    if (normalized.includes('maison') || normalized.includes('house')) {
      return 'Maison';
    }

    if (normalized.includes('commercial') || normalized.includes('local')) {
      return 'Local commercial';
    }

    return 'Autre';
  }

  private getEmptyResponse(address: string): DeepCityPropertyData {
    return {
      type_bien: null,
      surface: null,
      annee_construction: null,
      adresse: address,
    };
  }
}

export const deepCityService = new DeepCityService();
