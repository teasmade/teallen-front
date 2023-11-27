import { useTranslations, useLocale } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('Contact.form');
  const action = () => 'https://formsubmit.co/' + process.env.FORMSUBMIT_ID;
  const locale = useLocale();
  const appUri = process.env.APP_URI;
  // Get date/time as e.g. 15:34 - 2021-10-01
  const contactSubject = () => {
    const dateTimeString = () => {
      const now = new Date();
      const date = now.toISOString().split('T')[0];
      const time = now.toTimeString().split(' ')[0];
      return `${time} - ${date}`;
    };
    const dateTime = dateTimeString();
    return `teallen/contact @ ${dateTime}`;
  };

  const returnUri = () => {
    return appUri + '/' + locale + '/contact/thanks';
  };

  return (
    <div className="w-full">
      <form
        className="mt-4 flex flex-col items-center gap-4 form-control w-full"
        action={action()}
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value={contactSubject()}
        ></input>
        <input
          type="hidden"
          name="_next"
          value={returnUri()}
        ></input>
        <div className="">
          <label
            className="label"
            htmlFor="frm-email"
          >
            {t('email')}
          </label>
          <input
            id="frm-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            className="input input-bordered bg-sky-700 rounded-2xl rounded-tr-none rounded-bl-none "
          />
        </div>
        <div className="">
          <label
            className="label"
            htmlFor=""
          >
            {t('phone')}
          </label>
          <input
            id="frm-phone"
            type="text"
            name="phone"
            autoComplete="tel"
            className="input input-bordered bg-sky-700 rounded-2xl rounded-tr-none rounded-bl-none "
          />
        </div>
        <div>
          <label
            className="label"
            htmlFor="frm-first"
          >
            {t('firstname')}
          </label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            className="input input-bordered bg-sky-700 rounded-2xl rounded-tr-none rounded-bl-none "
          />
        </div>
        <div className="">
          <label
            className="label"
            htmlFor="frm-last"
          >
            {t('lastname')}
          </label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            className="input input-bordered bg-sky-700 rounded-2xl rounded-tr-none rounded-bl-none "
          />
        </div>
        <div className="w-full max-w-xs flex flex-col px-8">
          <label
            className="label"
            htmlFor="frm-interest"
          >
            {t('interest.label')}
          </label>
          <select
            id="frm-interest"
            name="interest"
            className="select select-bordered rounded-2xl rounded-tr-none rounded-bl-none bg-sky-700 w-full max-w-xs"
          >
            <option value="none">{t('interest.option_1')}</option>
            <option value="teacher">{t('interest.option_2')}</option>
            <option value="developer">{t('interest.option_3')}</option>
            <option value="both">{t('interest.option_4')}</option>
            <option value="other">{t('interest.option_5')}</option>
          </select>
        </div>
        <div className="w-full max-w-xs flex flex-col px-8">
          <label
            htmlFor="frm-message"
            className="label"
          >
            {t('message')}
          </label>
          <textarea
            id="frm-message"
            name="message"
            required
            rows={6}
            className="textarea textarea-bordered bg-sky-700 w-full rounded-2xl rounded-tr-none rounded-bl-none "
          ></textarea>
        </div>
        <div className="">
          <button
            className="btn bg-sky-950 border-none text-white w-1/3 w-full max-w-xs px-16 rounded-2xl rounded-tr-none rounded-bl-none lowercase text-xl hover:scale-110 ease-in duration-[150ms] hover:bg-sky-700"
            type="submit"
          >
            {t('submit')}
          </button>
        </div>
      </form>
    </div>
  );
}
