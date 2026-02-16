export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  details: {
    materials: string[];
    style: string;
    beforeImage?: string;
    afterImage?: string;
    completionDate: string;
    location: string;
  };
}

export type ProjectCategory = 'All' | 'Living Room' | 'Kitchen' | 'Bathroom' | 'Outdoor' | 'Commercial';