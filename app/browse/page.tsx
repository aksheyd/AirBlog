import { CosmosClient } from "@azure/cosmos";
import Link from "next/link";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export default async function Page() {
    if (!process.env.COSMOSDB_ENDPOINT || !process.env.COSMOSDB_KEY) {
        throw new Error("Missing CosmosDB configuration");
    }
    const client = new CosmosClient({ endpoint: process.env.COSMOSDB_ENDPOINT, key: process.env.COSMOSDB_KEY });
    const database = client.database("BlogStore");
    const container = database.container("Posts");

    const { resources: items } = await container.items.readAll().fetchAll();

    return (
        <>
            <div>
            <div>
                    {items.map((item) => (
                        <div key={item.id}>
                            <div>{item.airport.iata}</div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
