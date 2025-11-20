interface DeepCityPropertyData {
  type_bien: string | null;
  surface: number | null;
  annee_construction: string | null;
  adresse: string;
}

interface GeocodingResult {
  parcel_id?: string;
  lat?: number;
  lon?: number;
}

interface ParcelData {
  energy?: {
    type_logement?: string;
    surface_habitable?: number;
    annee_construction?: number;
  };
  building?: {
    type?: string;
    surface?: number;
    year?: number;
  };
  cadastre?: {
    type?: string;
  };
}

export class DeepCityService {
  private readonly BASE_URL = 'https://api.deepcity.io/v1';
  private readonly API_KEY = import.meta.env.VITE_DEEPCITY_API_KEY;

  async getPropertyData(address: string): Promise<DeepCityPropertyData> {
    try {
      const parcelId = await this.geocodeAddress(address);

      if (!parcelId) {
        return this.getEmptyResponse(address);
      }

      const parcelData = await this.getParcelData(parcelId);

      return {
        type_bien: this.extractPropertyType(parcelData),
        surface: this.extractSurface(parcelData),
        annee_construction: this.extractConstructionYear(parcelData),
        adresse: address,
      };
    } catch (error) {
      console.error('Erreur lors de la récupération des données DeepCity:', error);
      return this.getEmptyResponse(address);
    }
  }

  private async geocodeAddress(address: string): Promise<string | null> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/geocoding?address=${encodeURIComponent(address)}`,
        {
          headers: {
            'Authorization': `Bearer ${this.API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      const data: GeocodingResult = await response.json();
      return data.parcel_id || null;
    } catch (error) {
      console.error('Erreur geocoding:', error);
      return null;
    }
  }

  private async getParcelData(parcelId: string): Promise<ParcelData | null> {
    try {
      const response = await fetch(
        `${this.BASE_URL}/parcels/${parcelId}?include=energy,building,cadastre`,
        {
          headers: {
            'Authorization': `Bearer ${this.API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('Erreur récupération parcel:', error);
      return null;
    }
  }

  private extractPropertyType(data: ParcelData | null): string | null {
    if (!data) return null;

    if (data.energy?.type_logement) {
      return this.normalizePropertyType(data.energy.type_logement);
    }

    if (data.building?.type) {
      return this.normalizePropertyType(data.building.type);
    }

    if (data.cadastre?.type) {
      return this.normalizePropertyType(data.cadastre.type);
    }

    return null;
  }

  private extractSurface(data: ParcelData | null): number | null {
    if (!data) return null;

    if (data.energy?.surface_habitable) {
      return data.energy.surface_habitable;
    }

    if (data.building?.surface) {
      return data.building.surface;
    }

    return null;
  }

  private extractConstructionYear(data: ParcelData | null): string | null {
    if (!data) return null;

    if (data.energy?.annee_construction) {
      return String(data.energy.annee_construction);
    }

    if (data.building?.year) {
      return String(data.building.year);
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
