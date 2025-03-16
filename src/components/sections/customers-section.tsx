import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

const customers = [
  {
    name: "Lacoste",
    image: "/customers/lacoste.png",
    type: "Customer",
    url: "https://www.lacoste.com/",
  },
  {
    name: "Keyring",
    image: "/customers/keyring.png",
    type: "Customer",
    url: "https://www.kering.com/",
  },
  {
    name: "OVH",
    image: "/customers/ovh.png",
    type: "Partner",
    url: "https://www.ovh.com",
  },
  {
    name: "Qovery",
    image: "/customers/qovery.png",
    type: "Partner",
    url: "https://www.qovery.com/",
  },
  {
    name: "Franprix",
    image: "/customers/franprix.png",
    type: "Customer",
    url: "https://www.franprix.fr/",
  },
];

export default function CustomersSection() {
  return (
    <section className="mt-24">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="uppercase text-muted-foreground font-bold text-center">
          Trusted by
        </h2>
        <div className="flex gap-12 justify-center items-center mt-4 mb-8">
          {customers.map((customer) => (
            <div key={customer.name}>
              <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                  <a href={customer.url} target="_blank" rel="noreferer">
                    <Image
                      src={customer.image}
                      height={64}
                      width={128}
                      alt={customer.name}
                      className="grayscale brightness-100"
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>{customer.type}</TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
        {/* <ArrowLink asChild> */}
        {/*   <Link href="/">See all customers and partners</Link> */}
        {/* </ArrowLink> */}
      </div>
    </section>
  );
}
