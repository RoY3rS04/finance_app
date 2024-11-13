import { AppLayout } from "../Layout/AppLayout";

export default function Home({name}) {
    return (
        <AppLayout>
            <h1 className="text-2xl">Dashboard</h1>
            <article className="mt-5">
                <p>Welcome Back {name}!</p>
            </article>
        </AppLayout>
    )
}