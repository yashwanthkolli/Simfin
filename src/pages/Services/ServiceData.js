import { 
  Calculator, 
  Receipt, 
  SearchCheck,
  TrendingUp,
  Briefcase,
  Rocket,
  Globe,
  Scale,
  ClipboardCheck,
  GitMerge,
  Users,
  Banknote,
  Globe2,
  Gavel 
} from 'lucide-react'

import FinanceImgAvif from '@assets/images/services/finance.avif'
import FinanceImgWebp from '@assets/images/services/finance.webp'
import FinanceImgJpg from '@assets/images/services/finance.jpg'

import TaxImgAvif from '@assets/images/services/taxation.avif'
import TaxImgWebp from '@assets/images/services/taxation.webp'
import TaxImgJpg from '@assets/images/services/taxation.jpg'

import AuditImgAvif from '@assets/images/services/audit.avif'
import AuditImgWebp from '@assets/images/services/audit.webp'
import AuditImgJpg from '@assets/images/services/audit.jpg'

import VirtualImgAvif from '@assets/images/services/virtual.avif'
import VirtualImgWebp from '@assets/images/services/virtual.webp'
import VirtualImgJpg from '@assets/images/services/virtual.jpg'

import BusinessImgAvif from '@assets/images/services/business.avif'
import BusinessImgWebp from '@assets/images/services/business.webp'
import BusinessImgJpg from '@assets/images/services/business.jpg'

import StartUpImgAvif from '@assets/images/services/startup.avif'
import StartUpImgWebp from '@assets/images/services/startup.webp'
import StartUpImgJpg from '@assets/images/services/startup.jpg'

import IndianImgAvif from '@assets/images/services/indian.avif'
import IndianImgWebp from '@assets/images/services/indian.webp'
import IndianImgJpg from '@assets/images/services/indian.jpg'

import ValuationImgAvif from '@assets/images/services/valuation.avif'
import ValuationImgWebp from '@assets/images/services/valuation.webp'
import ValuationImgJpg from '@assets/images/services/valuation.jpg'

import DiligenceImgAvif from '@assets/images/services/diligence.avif'
import DiligenceImgWebp from '@assets/images/services/diligence.webp'
import DiligenceImgJpg from '@assets/images/services/diligence.jpg'

import MergerImgAvif from '@assets/images/services/merger.avif'
import MergerImgWebp from '@assets/images/services/merger.webp'
import MergerImgJpg from '@assets/images/services/merger.jpg'

import SuccessionImgAvif from '@assets/images/services/succession.avif'
import SuccessionImgWebp from '@assets/images/services/succession.webp'
import SuccessionImgJpg from '@assets/images/services/succession.jpg'

import FEMAImgAvif from '@assets/images/services/fema.avif'
import FEMAImgWebp from '@assets/images/services/fema.webp'
import FEMAImgJpg from '@assets/images/services/fema.jpg'

import InternationalImgAvif from '@assets/images/services/international.avif'
import InternationalImgWebp from '@assets/images/services/international.webp'
import InternationalImgJpg from '@assets/images/services/international.jpg'

import GSTImgAvif from '@assets/images/services/gst.avif'
import GSTImgWebp from '@assets/images/services/gst.webp'
import GSTImgJpg from '@assets/images/services/gst.jpg'

const ServiceData = [
  {
    id: 'finance-accounting',
    title: 'Finance and Accounting Services',
    shortDescription:
      'Comprehensive finance and accounting support for accurate reporting, compliance, and informed decision-making.',
    description:
      'Comprehensive finance and accounting support to ensure accurate financial reporting, regulatory compliance, and informed decision-making. We help businesses build reliable financial systems and maintain clear records aligned with operational and statutory requirements.',
    points: [
      'Bookkeeping and accounting',
      'Financial statement preparation',
      'MIS and management reporting',
      'Accounting process documentation',
    ],
    icon: Calculator,
    images: {
      avif: FinanceImgAvif,
      webp: FinanceImgWebp,
      jpg: FinanceImgJpg,
    },
  },

  {
    id: 'taxation',
    title: 'Taxation (Direct and Indirect)',
    shortDescription:
      'Advisory and compliance support across direct and indirect taxes with focus on accuracy and timely compliance.',
    description:
      'Advisory and compliance support across direct and indirect taxes to manage filings, assessments, and regulatory requirements. Our approach focuses on accuracy, timely compliance, and practical tax planning aligned with applicable laws.',
    points: [
      'Income tax compliance and filings',
      'GST compliance and returns',
      'Tax planning and advisory',
      'Representation before tax authorities',
    ],
    icon: Receipt,
    images: {
      avif: TaxImgAvif,
      webp: TaxImgWebp,
      jpg: TaxImgJpg,
    },
  },

  {
    id: 'audit-assurance',
    title: 'Audit and Assurance',
    shortDescription:
      'Audit preparation and coordination aligned with statutory and regulatory requirements.',
    description:
      'Audit planning, preparation, and coordination services aligned with statutory and regulatory requirements. We work closely with management and auditors to ensure readiness, clarity, and timely resolution of audit matters.',
    points: [
      'Statutory audit coordination',
      'Audit preparation and scheduling',
      'Documentation and audit support',
      'Liaison with auditors and stakeholders',
    ],
    icon: SearchCheck,
    images: {
      avif: AuditImgAvif,
      webp: AuditImgWebp,
      jpg: AuditImgJpg,
    },
  },

  {
    id: 'virtual-cfo',
    title: 'Virtual CFO',
    shortDescription:
      'Strategic financial leadership support without the need for a full-time CFO.',
    description:
      'Strategic financial leadership support for businesses requiring ongoing financial oversight without a full-time CFO. We assist management with planning, analysis, and reporting to support informed and timely business decisions.',
    points: [
      'Budgeting and forecasting',
      'Cash flow management',
      'Financial analysis and reporting',
      'Management and board support',
    ],
    icon: TrendingUp,
    images: {
      avif: VirtualImgAvif,
      webp: VirtualImgWebp,
      jpg: VirtualImgJpg,
    },
  },

  {
    id: 'business-advisory',
    title: 'Business Advisory and Consulting',
    shortDescription:
      'Performance review and strategic advisory using financial data and objective analysis.',
    description:
      'Business advisory and consulting services focused on reviewing performance, identifying risks, and supporting strategic decision-making. We provide objective analysis using financial data to improve efficiency and long-term sustainability.',
    points: [
      'Financial performance analysis',
      'Business and segment reporting',
      'Fund flow and cash analysis',
      'Process and control reviews',
    ],
    icon: Briefcase,
    images: {
      avif: BusinessImgAvif,
      webp: BusinessImgWebp,
      jpg: BusinessImgJpg,
    },
  },

  {
    id: 'startup-assistance',
    title: 'Startup Assistance',
    shortDescription:
      'End-to-end financial and compliance support for startups across early growth stages.',
    description:
      'End-to-end financial, compliance, and advisory support for startups across early growth stages. We help founders establish compliant structures, manage finances, and navigate regulatory requirements effectively.',
    points: [
      'Entity setup and structuring',
      'Accounting and compliance setup',
      'Tax and regulatory support',
      'Ongoing finance advisory',
    ],
    icon: Rocket,
    images: {
      avif: StartUpImgAvif,
      webp: StartUpImgWebp,
      jpg: StartUpImgJpg,
    },
  },

  {
    id: 'indian-entry',
    title: 'Indian Entry Strategies',
    shortDescription:
      'Advisory support for foreign companies establishing operations in India.',
    description:
      'Advisory support for foreign companies planning to establish or expand operations in India. We assist with financial, regulatory, and compliance considerations to enable structured and compliant market entry.',
    points: [
      'Entry structuring advisory',
      'Regulatory and compliance planning',
      'Tax and accounting setup',
      'India-specific advisory support',
    ],
    icon: Globe,
    images: {
      avif: IndianImgAvif,
      webp: IndianImgWebp,
      jpg: IndianImgJpg,
    },
  },

  {
    id: 'business-valuation',
    title: 'Business Valuation',
    shortDescription:
      'Independent business valuation services aligned with regulatory and strategic requirements.',
    description:
      'Independent business valuation services to support strategic decisions, transactions, regulatory requirements, and internal planning. Valuations are conducted using appropriate methodologies aligned with applicable standards.',
    points: [
      'Valuation for transactions',
      'Regulatory and compliance valuations',
      'Share and equity valuation',
      'Financial modelling support',
    ],
    icon: Scale,
    images: {
      avif: ValuationImgAvif,
      webp: ValuationImgWebp,
      jpg: ValuationImgJpg,
    },
  },

  {
    id: 'due-diligence',
    title: 'Due Diligence Support',
    shortDescription:
      'Structured financial and compliance reviews for transaction support.',
    description:
      'Financial and compliance due diligence services to identify risks, exposures, and key considerations in transactions. We assist stakeholders with structured analysis and clear reporting.',
    points: [
      'Financial due diligence',
      'Tax and compliance reviews',
      'Risk identification and assessment',
      'Due diligence reporting',
    ],
    icon: ClipboardCheck,
    images: {
      avif: DiligenceImgAvif,
      webp: DiligenceImgWebp,
      jpg: DiligenceImgJpg,
    },
  },

  {
    id: 'merger-advisory',
    title: 'Merger Advisory',
    shortDescription:
      'Strategic and financial advisory support for mergers and restructuring.',
    description:
      'Strategic and financial advisory support for mergers, acquisitions, and restructuring initiatives. We assist across transaction stages to support informed and well-structured decisions.',
    points: [
      'Transaction structuring',
      'Financial and commercial analysis',
      'Coordination with advisors',
      'Post-transaction support',
    ],
    icon: GitMerge,
    images: {
      avif: MergerImgAvif,
      webp: MergerImgWebp,
      jpg: MergerImgJpg,
    },
  },

  {
    id: 'succession-planning',
    title: 'Succession Planning',
    shortDescription:
      'Ownership and management transition advisory for long-term continuity.',
    description:
      'Advisory support for structuring ownership and management succession aligned with business continuity and long-term objectives. We help businesses plan transitions in a structured and compliant manner.',
    points: [
      'Ownership structuring advisory',
      'Succession planning frameworks',
      'Tax and regulatory considerations',
      'Transition and continuity planning',
    ],
    icon: Users,
    images: {
      avif: SuccessionImgAvif,
      webp: SuccessionImgWebp,
      jpg: SuccessionImgJpg,
    },
  },

  {
    id: 'fema-advisory',
    title: 'FEMA Advisory',
    shortDescription:
      'Advisory on foreign exchange regulations and cross-border transactions.',
    description:
      'Advisory services on Foreign Exchange Management Act (FEMA) regulations and cross-border transactions. We support businesses in ensuring compliance with foreign exchange laws and reporting requirements.',
    points: [
      'FEMA compliance advisory',
      'Cross-border transaction support',
      'Regulatory reporting assistance',
      'Liaison with authorised dealers',
    ],
    icon: Banknote,
    images: {
      avif: FEMAImgAvif,
      webp: FEMAImgWebp,
      jpg: FEMAImgJpg,
    },
  },

  {
    id: 'international-tax',
    title: 'International Tax Structuring',
    shortDescription:
      'Cross-border tax structuring aligned with regulatory and business objectives.',
    description:
      'Advisory support on cross-border tax structuring to align international operations with regulatory requirements and business objectives. We assist in evaluating structures with a focus on compliance and efficiency.',
    points: [
      'Cross-border tax planning',
      'Treaty and withholding analysis',
      'International transaction structuring',
      'Regulatory compliance advisory',
    ],
    icon: Globe2,
    images: {
      avif: InternationalImgAvif,
      webp: InternationalImgWebp,
      jpg: InternationalImgJpg,
    },
  },

  {
    id: 'gst-litigation',
    title: 'GST Litigation Strategy',
    shortDescription:
      'Strategic advisory support for GST disputes and assessment matters.',
    description:
      'Strategic advisory support for GST disputes, assessments, and litigation-related matters. We assist businesses in understanding positions and planning appropriate responses.',
    points: [
      'GST dispute analysis',
      'Assessment and notice support',
      'Litigation strategy planning',
    ],
    icon: Gavel,
    images: {
      avif: GSTImgAvif,
      webp: GSTImgWebp,
      jpg: GSTImgJpg,
    },
  },
]

export default ServiceData;