import ServiceAreaPage, { serviceAreaMetadata } from '@/components/ServiceAreaPage';
import { getAreaBySlug } from '@/lib/seoData';

const area = getAreaBySlug('gulf-breeze-fl');

export const metadata = serviceAreaMetadata(area);

export default function Page() {
  return <ServiceAreaPage area={area} />;
}
