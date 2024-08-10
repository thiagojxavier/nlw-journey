import { Calendar, Plus, Tag, X } from "lucide-react";
import { useState } from "react";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";

export function TripDetailsPage() {
    const [isCreateActivityOpen, setIsCreateActivityOpen] = useState(false);

    function openCreateActivityModal() {
        setIsCreateActivityOpen(true)
    }

    function closeCreateActivityModal() {
        setIsCreateActivityOpen(false)
    }

    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <button onClick={openCreateActivityModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                            <Plus className="size-5"/>
                            Cadastrar atividade
                        </button>
                    </div>

                    <Activities />
                </div>

                <div className="w-80 space-y-6">
                    <ImportantLinks/>
                    <Guests />
                    <div className="w-full h-px bg-zinc-800"></div>
                    <div></div>
                </div>
            </main>

            {isCreateActivityOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                            <button type="button" onClick={closeCreateActivityModal}>
                            <X className="size-5 text-zinc-400"></X>
                            </button>
                        </div>
                        <p className="text-sm text-zinc-400">
                            Todos os convidados podem visualizar as atividades.
                        </p>
                        </div>

                        <form className="space-y-3">
                            <div className="h-16 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                                <Tag className="text-zinc-400 size-5" />
                                <input
                            name="title"
                            placeholder="Qual a atividade?"
                            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"/>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                                <Calendar className="text-zinc-400 size-5" />
                                <input
                                type="datetime-local" 
                                name="occurs_at"
                                placeholder="Data e horário da atividade"
                                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1 "/>
                                </div>
                            </div>
                        
                            <button type="submit" className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-lime-400">
                                Salvar atividade
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
            )
}