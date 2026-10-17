import ResumeAccess from '@/components/ResumeAccess';
import { resumeCopy } from '@/lib/resume-copy';
export const metadata = { title: resumeCopy.en.title, robots: { index: false, follow: true }, alternates: { canonical: '/resume' } };
export default function ResumePage() { return <ResumeAccess/>; }
