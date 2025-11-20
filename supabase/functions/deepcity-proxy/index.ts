import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const url = new URL(req.url);
    const parcelId = url.searchParams.get("parcel_id");

    if (!parcelId) {
      return new Response(
        JSON.stringify({ error: "parcel_id parameter is required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Fetching property data for parcel:", parcelId);

    const deepCityUrl = `https://api.deepcity.fr/v1/properties?parcel_id=${encodeURIComponent(parcelId)}`;
    const response = await fetch(deepCityUrl);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepCity API error:", response.status, errorText);
      return new Response(
        JSON.stringify({
          error: "DeepCity API error",
          status: response.status,
          details: errorText
        }),
        {
          status: response.status,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const data = await response.json();
    console.log("Successfully fetched property data");

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error in deepcity-proxy:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: error.message
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
