import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars, useTexture } from "@react-three/drei";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import siriusTexture from "@/assets/star-sirius.jpg";
import betelgeuseTexture from "@/assets/star-betelgeuse.jpg";
import rigelTexture from "@/assets/star-rigel.jpg";
import vegaTexture from "@/assets/star-vega.jpg";
import polarisTexture from "@/assets/star-polaris.jpg";
import antaresTexture from "@/assets/star-antares.jpg";

interface StarData {
  name: string;
  type: string;
  constellation: string;
  magnitude: number;
  distance: string;
  color: string;
  temperature: string;
  description: string;
  radius: number;
  texture: string;
}

const stars: StarData[] = [
  {
    name: "Sirius",
    type: "Main Sequence (A-type)",
    constellation: "Canis Major",
    magnitude: -1.46,
    distance: "8.6 light-years",
    color: "#9BB0FF",
    temperature: "9,940 K",
    description: "The brightest star in the night sky, also known as the Dog Star",
    radius: 1.3,
    texture: siriusTexture,
  },
  {
    name: "Betelgeuse",
    type: "Red Supergiant",
    constellation: "Orion",
    magnitude: 0.42,
    distance: "548 light-years",
    color: "#FF8C42",
    temperature: "3,500 K",
    description: "A massive red supergiant nearing the end of its life",
    radius: 2.0,
    texture: betelgeuseTexture,
  },
  {
    name: "Rigel",
    type: "Blue Supergiant",
    constellation: "Orion",
    magnitude: 0.13,
    distance: "863 light-years",
    color: "#B8D4FF",
    temperature: "11,000 K",
    description: "One of the most luminous stars visible to the naked eye",
    radius: 1.8,
    texture: rigelTexture,
  },
  {
    name: "Vega",
    type: "Main Sequence (A-type)",
    constellation: "Lyra",
    magnitude: 0.03,
    distance: "25 light-years",
    color: "#C5D5FF",
    temperature: "9,600 K",
    description: "The fifth brightest star in the night sky",
    radius: 1.2,
    texture: vegaTexture,
  },
  {
    name: "Polaris",
    type: "Yellow Supergiant",
    constellation: "Ursa Minor",
    magnitude: 1.98,
    distance: "433 light-years",
    color: "#FFE8A5",
    temperature: "6,015 K",
    description: "The North Star, used for navigation for centuries",
    radius: 1.6,
    texture: polarisTexture,
  },
  {
    name: "Antares",
    type: "Red Supergiant",
    constellation: "Scorpius",
    magnitude: 1.06,
    distance: "550 light-years",
    color: "#FF6B42",
    temperature: "3,400 K",
    description: "A rival to Mars in brightness and color",
    radius: 1.9,
    texture: antaresTexture,
  },
];

function StarModel({ star }: { star: StarData }) {
  const texture = useTexture(star.texture);
  
  return (
    <group>
      <Sphere args={[star.radius, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          emissive={star.color}
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </Sphere>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color={star.color} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color={star.color} />
    </group>
  );
}

export const StarCatalog = () => {
  const [selectedStar, setSelectedStar] = useState<StarData>(stars[0]);

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stars.map((star) => (
          <Button
            key={star.name}
            onClick={() => setSelectedStar(star)}
            variant={selectedStar.name === star.name ? "default" : "outline"}
            className="h-auto py-3 flex flex-col items-center gap-2"
          >
            <div
              className="w-8 h-8 rounded-full animate-glow-pulse"
              style={{ backgroundColor: star.color, boxShadow: `0 0 20px ${star.color}` }}
            />
            <span className="text-xs">{star.name}</span>
          </Button>
        ))}
      </div>

      <Card className="p-6 bg-card/50 backdrop-blur border-border">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="h-[400px] rounded-lg overflow-hidden bg-background/50 border border-border">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
              <StarModel star={selectedStar} />
              <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                minDistance={2}
                maxDistance={10}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Canvas>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{selectedStar.name}</h2>
              <p className="text-muted-foreground">{selectedStar.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Constellation</div>
                <div className="text-lg font-semibold text-foreground">{selectedStar.constellation}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Type</div>
                <div className="text-lg font-semibold text-foreground">{selectedStar.type}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Magnitude</div>
                <div className="text-lg font-semibold text-foreground">{selectedStar.magnitude}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="text-sm text-muted-foreground mb-1">Distance</div>
                <div className="text-lg font-semibold text-foreground">{selectedStar.distance}</div>
              </div>
              <div className="p-4 rounded-lg bg-muted/50 border border-border col-span-2">
                <div className="text-sm text-muted-foreground mb-1">Temperature</div>
                <div className="text-lg font-semibold text-foreground">{selectedStar.temperature}</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-primary">Interactive Controls:</span> Click and drag to
                rotate • Scroll to zoom • Right-click to pan
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
