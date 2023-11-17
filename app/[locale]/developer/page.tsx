import { NextIntlClientProvider, useMessages } from 'next-intl';

import DeveloperHome from './DeveloperHome';

export default function DeveloperPage() {
  const messages = useMessages();

  if (!messages?.Developer || typeof messages?.Developer === 'string')
    return null;

  return (
    <>
      <NextIntlClientProvider messages={messages.Developer}>
        <DeveloperHome />
      </NextIntlClientProvider>
    </>
  );
}
