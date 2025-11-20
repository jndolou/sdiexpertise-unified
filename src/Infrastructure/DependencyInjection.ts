import {
  TestimonialRepository,
  DiagnosticRepository,
  ArticleRepository,
  ExpertiseRepository,
} from './Repositories';
import {
  GetAllTestimonials,
  GetAllDiagnostics,
  GetFeaturedDiagnostics,
  GetAllArticles,
  GetFeaturedArticles,
  GetAllExpertises,
  GetArticleById,
  GetDiagnosticById,
} from '../UseCase';

const testimonialRepository = new TestimonialRepository();
const diagnosticRepository = new DiagnosticRepository();
const articleRepository = new ArticleRepository();
const expertiseRepository = new ExpertiseRepository();

export const useCases = {
  getAllTestimonials: new GetAllTestimonials(testimonialRepository),
  getAllDiagnostics: new GetAllDiagnostics(diagnosticRepository),
  getFeaturedDiagnostics: new GetFeaturedDiagnostics(diagnosticRepository),
  getAllArticles: new GetAllArticles(articleRepository),
  getFeaturedArticles: new GetFeaturedArticles(articleRepository),
  getAllExpertises: new GetAllExpertises(expertiseRepository),
  getArticleById: new GetArticleById(articleRepository),
  getDiagnosticById: new GetDiagnosticById(diagnosticRepository),
};
