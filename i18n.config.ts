export default defineI18nConfig(async () => {
  const uz = await import('./public/lang/uz.json');
  const serviceUz = await import('./public/lang/service/uz.json');
  const investorUz = await import('./public/lang/investor/uz.json');

  const en = await import('./public/lang/en.json');
  const serviceEn = await import('./public/lang/service/en.json');
  const investorEn = await import('./public/lang/investor/en.json');

  const ru = await import('./public/lang/ru.json');
  const serviceRu = await import('./public/lang/service/ru.json');
  const investorRu = await import('./public/lang/investor/ru.json');

  return {
    legacy: false,
    locale: 'uz',
    messages: {
      uz: {
        ...uz,
        ...serviceUz,
        ...investorUz,
      },
      en: {
        ...en,
        ...serviceEn,
        ...investorEn,
      },
      ru: {
        ...ru,
        ...serviceRu,
        ...investorRu,
      }
    }
  };
});
