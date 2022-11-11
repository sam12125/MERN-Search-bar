import { SearchForm } from "./searchForm";
import { AdsGrid } from "./adsGrid";
import useFetch from "../../api/useFetch";

export const Search = () => {
  const [hitApi, data, loading, error] = useFetch("http://localhost:4000/ads");

  const handleSubmit = async (searchText) => {
    hitApi(searchText);
  };

  return (
    <>
      <SearchForm handleSubmit={handleSubmit} placeholder="Search Ads" />
      {data?.length ? <AdsGrid data={data} /> : null}
    </>
  );
};
