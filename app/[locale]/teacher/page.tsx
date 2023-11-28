import { NextIntlClientProvider, useMessages } from 'next-intl';

import TeacherHome from './TeacherHome';

export default function TeacherPage() {
  const messages = useMessages();

  if (!messages?.Teacher || typeof messages?.Teacher === 'string') return null;

  return (
    <>
      <NextIntlClientProvider messages={messages.Teacher}>
        <TeacherHome />
      </NextIntlClientProvider>
    </>
  );
}
