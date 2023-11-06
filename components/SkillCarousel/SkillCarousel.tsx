// import { useTranslations }
import { NextIntlClientProvider, useMessages } from 'next-intl';
import SkillCarouselClient from './SkillCarouselClient';

interface SkillCarouselProps {
  field: string;
}

export default function SkillCarousel({ field }: SkillCarouselProps) {
  // const t = useTranslations(`SkillCarousel.${field}`);
  const messages = useMessages();
  if (!messages?.SkillCarousel || typeof messages?.SkillCarousel === 'string')
    return null;

  return (
    <NextIntlClientProvider messages={messages.SkillCarousel}>
      <SkillCarouselClient field={field} />
    </NextIntlClientProvider>
  );
}
