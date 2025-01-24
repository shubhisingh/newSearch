import axios from "axios";

const GUARDIAN_API_KEY = "9ca1d75e-4290-4c25-a90e-c8b6c505a3f9";
const NEWSAPI_KEY = "6e8cd7ca4b2c49e4bf5fe3b19e511bca";
const OPENNEWS_API_KEY = "iWC1AppWLuvw8bq2a9ayzvKCO9KY8Giw";

export const fetchGuardianArticles = async (filters: any) => {
  const { dateFrom, dateTo, category, sectionId } = filters;
  const url = `https://content.guardianapis.com/search?from=${dateFrom}&to=${dateTo}&category=${category}&section=${sectionId}&api-key=${GUARDIAN_API_KEY}`;
  const response = await axios.get(url);
  return response.data.response.results;
};

export const fetchNewsAPIArticles = async (filters: any) => {
  const { dateFrom, dateTo, category, sectionId } = filters;
  const url = `https://newsapi.org/v2/everything?from=${dateFrom}&to=${dateTo}&category=${category}&q=${sectionId}&apiKey=${NEWSAPI_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};

export const fetchOpenNewsArticles = async (filters: any) => {
  const { dateFrom, dateTo, category, sectionId } = filters;
  const url = `https://api.opennews.com/v1/articles?from=${dateFrom}&to=${dateTo}&category=${category}&search=${sectionId}&api-key=${OPENNEWS_API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};
