import { File } from "../Components/File";
import { File_Folder } from "../types/myTypes";

export default function Files() {

    function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        (e.target as HTMLDivElement).classList.add('opacity-100');
    }

    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
       
        const files = e.dataTransfer.files;
        console.log(files);
    }

    function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        (e.target as HTMLDivElement).classList.remove('opacity-100');
    }

    return (
        <div className="h-full flex flex-col gap-y-10 relative">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="font-medium text-[#228B22] text-2xl">Archivos</h1>
                    <p className="text-[1rem]">Tu espacio para subir archivos excel</p>
                </div>
                <button className="text-gray-500">
                    <svg width='40' height='40' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-48z"/></svg>
                </button>
            </header>
            <div className="grid grid-cols-5 gap-y-10">
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.Folder}></File>
                <File name="Sup" url="#" type={File_Folder.File}></File>
            </div>
            <div onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave} className="flex-1 items-end">
                <div className="w-full border-dashed flex opacity-0 items-center justify-center border-2 border-[#2C3E50] h-[240px] text-2xl absolute bottom-0 left-0 bg-white">
                    Deja caer tus archivos aqui
                </div>
            </div>
        </div>
    )
}