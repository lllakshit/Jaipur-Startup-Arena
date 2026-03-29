"use client";

import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
} from "react-leaflet";
import type { JaipurCompany } from "@/lib/data/jaipur";

type JaipurMapProps = {
  companies: JaipurCompany[];
  activeCompanyId: string | null;
  onSelectCompany: (companyId: string) => void;
};

const jaipurCenter: [number, number] = [26.9124, 75.7873];

export function JaipurMap({
  companies,
  activeCompanyId,
  onSelectCompany,
}: JaipurMapProps) {
  return (
    <div className="h-[420px] overflow-hidden rounded-[1.5rem] border border-white/10">
      <MapContainer
        center={jaipurCenter}
        className="h-full w-full"
        scrollWheelZoom={false}
        zoom={11}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companies.map((company) => {
          const isActive = company.id === activeCompanyId;

          return (
            <CircleMarker
              center={[company.latitude, company.longitude]}
              eventHandlers={{
                click: () => onSelectCompany(company.id),
              }}
              fillOpacity={0.8}
              key={company.id}
              pathOptions={{
                color: isActive ? "#ffd4a1" : "#ff8a4c",
                fillColor: isActive ? "#fff1dc" : "#ff8a4c",
                weight: isActive ? 3 : 2,
              }}
              radius={isActive ? 12 : 9}
            >
              <Popup>
                <div className="min-w-[220px] space-y-2 text-sm">
                  <p className="font-semibold">{company.name}</p>
                  <p>{company.neighborhood}</p>
                  <p>{company.sector}</p>
                  <p>{company.jobs.length} tracked roles</p>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}
