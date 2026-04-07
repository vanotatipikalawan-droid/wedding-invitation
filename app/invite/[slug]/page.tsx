import { supabase } from "@/lib/supabase";

export default async function Page({ params }: any) {
  const { data } = await supabase
    .from("invitations")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!data) return <div>Undangan tidak ditemukan</div>;

  return (
    <div style={{textAlign:"center", padding:40}}>
      <h1>{data.groom_name} & {data.bride_name}</h1>
      <p>{data.event_date}</p>
      <p>{data.venue}</p>
    </div>
  );
}
