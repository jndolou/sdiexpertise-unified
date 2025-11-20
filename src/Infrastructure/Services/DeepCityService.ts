interface DeepCityPropertyData {
  type_bien: string | null;
  surface: number | null;
  annee_construction: string | null;
  adresse: string;
}

interface BanAddressResult {
  features?: Array<{
    geometry?: {
      coordinates?: [number, number];
    };
    properties?: {
      label?: string;
      postcode?: string;
      city?: string;
    };
  }>;
}

interface DeepCityResponse {
  properties?: Array<{
    cadastral?: {
      id?: string;
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
      const coordinates = await this.geocodeAddress(address);

      if (!coordinates) {
        return this.getEmptyResponse(address);
      }

      const propertyData = await this.getPropertyByCoordinates(coordinates);

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

  private async geocodeAddress(address: string): Promise<[number, number] | null> {
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
      );

      if (!response.ok) {
        return null;
      }

      const data: BanAddressResult = await response.json();
      const coordinates = data.features?.[0]?.geometry?.coordinates;

      if (!coordinates || coordinates.length !== 2) {
        return null;
      }

      return coordinates;
    } catch (error) {
      console.error('Erreur geocoding:', error);
      return null;
    }
  }

  private async getPropertyByCoordinates(
    coordinates: [number, number]
  ): Promise<DeepCityPropertyResponse | null> {
    try {
      const [lon, lat] = coordinates;
      const response = await fetch(
        `${this.BASE_URL}/properties?lat=${lat}&lon=${lon}&radius=10`
      );

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur récupération données propriété:', error);
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
