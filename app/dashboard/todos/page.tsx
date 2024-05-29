import Todo from "@/app/ui/todos/todo";

export default async function Page() {

    return (
        <main>
            <h1 className={` mb-4 text-xl md:text-2xl`}>
                Todos
            </h1>
            <Todo />
        </main>
    );
}