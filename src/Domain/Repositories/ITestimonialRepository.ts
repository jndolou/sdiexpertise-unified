import { Testimonial } from '../Models';

export interface ITestimonialRepository {
  getAll(): Promise<Testimonial[]>;
  getById(id: string): Promise<Testimonial | null>;
}
