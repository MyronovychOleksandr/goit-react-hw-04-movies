import queryString from "query-string";

export default function gitQueryString(string) {
  return queryString.parse(string);
}
