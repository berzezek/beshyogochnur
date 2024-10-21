export default defineI18nConfig(async () => {
  const en = await import('./public/lang/en.json');
  const uz = await import('./public/lang/uz.json');
  const ru = await import('./public/lang/ru.json');

  return {
    legacy: false,
    locale: 'uz',
    messages: {
      en: en.default,
      uz: uz.default,
      ru: ru.default,
    },
  };
});
