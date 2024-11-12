import { AppLayout } from "../Layout/AppLayout";

export default function Home({name}) {
    return (
        <AppLayout>
            <h1>Welcome Back {name}!</h1>
        </AppLayout>
    )
}