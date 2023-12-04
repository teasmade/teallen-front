import { useTranslations, useLocale } from 'next-intl';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

interface FormDataFields {
  email: string;
  phone: string;
  first: string;
  last: string;
  interest: string;
  message: string;
  _next: string;
}
const prisma = new PrismaClient();

export default function ContactPage() {
  async function action(formData: FormData) {
    'use server';
    const data = Object.fromEntries(formData) as unknown as FormDataFields;
    try {
      const results = await prisma.form.create({
        data: {
          email: data?.email,
          phone: data?.phone,
          firstName: data?.first,
          lastName: data?.last,
          interest: data?.interest,
          message: data?.message,
        },
      });
    } catch (error) {
      console.error(error);
      // TODO: handle error
    } finally {
      redirect(data._next);
    }
  }

  const t = useTranslations('Contact.form');
  const locale = useLocale();
  const returnUri = () => {
    return `/${locale}/contact/thanks`;
  };
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

  return (
    <div className="w-full">
      <form
        className="mt-4 flex flex-col items-center gap-4 form-control w-full"
        action={action}
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
