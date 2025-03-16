interface IPageConstant {
  content: Array<Array<object>>;
  title: string;
  description: string;
  url: string;
}

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const handleSearchStaticPages = (
  value: string,
  pagesContent: Array<IPageConstant>
) => {
  const results: {
    pageTitle: string;
    pageDescription: string;
    pageUrl: string;
  }[] = [];

  pagesContent.map((page) => {
    const normalizedSearch = normalizeString(value);
    if (
      normalizeString(page.title).includes(normalizedSearch) ||
      normalizeString(page.description).includes(normalizedSearch) ||
      normalizeString(page.url).includes(normalizedSearch)
    ) {
      results.push({
        pageTitle: page.title,
        pageDescription: page.description,
        pageUrl: window.location.origin + page.url,
      });
      return;
    }
    page.content.map((constant) => {
      constant.map((section) => {
        const valuesResults = Object.values(section).filter((v) => {
          if (typeof v === "string" || v instanceof String) {
            return normalizeString(v as string).includes(normalizedSearch);
          }
          return false;
        });
        if (valuesResults.length > 0) {
          results.push({
            pageTitle: page.title,
            pageDescription: page.description,
            pageUrl: window.location.origin + page.url,
          });
          return;
        }
      });
    });
  });

  return results;
};
