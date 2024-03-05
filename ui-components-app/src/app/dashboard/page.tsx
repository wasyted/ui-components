'use client'

import { useState, useEffect } from "react";
import ShortcutCard from "@/components/dashboard/ShortcutCard";
import ShortcutCardSkeleton from "@/components/dashboard/ShortcutCardSkeleton";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/data/projects.json');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setProjects(data.projects);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <main className="p-4 w-full">
      <div>
        <p className="opacity-50">Projects</p>
        <p className="text-4xl">My Projects</p>
      </div>
      <div className="w-full flex items-center justify-between pt-8 pb-4">
        <p className="text-sm">Frontend</p>
        <p className="opacity-50">see all →</p>
      </div>
      <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ShortcutCardSkeleton key={index} />
          ))
        ) : (
          projects.frontend?.map((project: any, index: number) => (
            <ShortcutCard
              key={index}
              workgroupName={project.name}
              workgroupImage={project.image}
            />
          ))
        )}
      </div>
      <div className="w-full flex items-center justify-between pt-8 pb-4">
        <p className="text-sm">Fullstack</p>
        <p className="opacity-50">see all →</p>
      </div>
      <div className="grid grid-cols-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {loading ? (
          // Mostrar un esqueleto mientras se carga la data
          Array.from({ length: 6 }).map((_, index) => (
            <ShortcutCardSkeleton key={index} />
          ))
        ) : (
          // Mostrar las tarjetas de ShortcutCard con los datos obtenidos
          projects.fullstack?.map((project: any, index) => (
            <ShortcutCard
              key={index}
              workgroupName={project.name}
              workgroupImage={project.image}
            />
          ))
        )}
      </div>
    </main>
  );
}
