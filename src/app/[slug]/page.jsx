import Link from "next/link";
import DataTable from "@/components/DataTable";
import { fetchCityData, fetchCountryData } from "@/lib/fetchData";

export async function generateMetadata({ params }) {
  return {
    title: params.slug,
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  const isCountry = slug.includes("-");

  const [city, country] = isCountry ? slug.split("-") : [slug, null];

  const data = isCountry
    ? await fetchCountryData(country)
    : await fetchCityData(city);

  return (
    <div className="p-4">
      <div className="mb-4">
        <Link href="/" className="text-blue-500 underline">← Back to Home</Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">
        {isCountry ? "Country Page: " : "City Page: "} {isCountry ? country : city}
      </h1>
      <DataTable data={data} />
    </div>
  );
}
