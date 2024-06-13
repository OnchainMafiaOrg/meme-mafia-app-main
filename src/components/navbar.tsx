import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect, useState } from "react";
import useCurrentChain from "@/hooks/useCurrentChain";
import CoinGeckoMarquee from "./CoinGeckoMarquee";

export default function Navbar() {
  const chain = useCurrentChain();
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  return (
    <div className="py-4 border-b backdrop-blur-lg">
      <div className="container flex flex-wrap items-center gap-6 lg:gap-12">
        <div
          className={cn("items-center flex-1 max-lg:gap-6 gap-12 flex ", {
            "max-lg:flex-col max-lg:min-w-full": openMenu,
            "max-lg:hidden": !openMenu,
          })}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 ml-auto lg:justify-start">
            <div className="max-w-xl mr-4 overflow-hidden rounded-md">
              <CoinGeckoMarquee
                coinIds="bitcoin,ethereum,litecoin"
                currency="usd"
              />
            </div>
            <Button
              onClick={() => open({ view: "Networks" })}
              variant={"outline"}
              className="gap-2 py-5 border-input"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={25}
                height={24}
                fill="none"
              >
                <path
                  fill="#F3BA2F"
                  d="M24.113 14.903c-1.603 6.429-8.115 10.34-14.545 8.738C3.141 22.038-.772 15.527.831 9.098 2.434 2.67 8.945-1.244 15.374.36c6.43 1.603 10.342 8.115 8.739 14.544Z"
                />
                <path
                  fill="#fff"
                  d="m9.53 10.79 2.944-2.942 2.945 2.945 1.712-1.713-4.657-4.657-4.656 4.656L9.53 10.79ZM4.894 12.001l1.712-1.712L8.319 12l-1.713 1.712L4.894 12ZM9.53 13.21l2.944 2.943 2.945-2.945 1.713 1.71-4.657 4.658-4.657-4.654L9.53 13.21ZM16.626 12l1.712-1.712L20.051 12l-1.713 1.714L16.626 12Z"
                />
                <path
                  fill="#fff"
                  d="m14.21 12-1.738-1.738-1.284 1.284-.149.147-.304.304 1.737 1.736L14.21 12V12Z"
                />
                <path
                  fill="#F3BA2F"
                  d="M24.113 14.903c-1.603 6.429-8.115 10.34-14.545 8.738C3.141 22.038-.772 15.527.831 9.098 2.434 2.67 8.945-1.244 15.374.36c6.43 1.603 10.342 8.115 8.739 14.544Z"
                />
                <path
                  fill="#fff"
                  d="m9.53 10.79 2.944-2.942 2.945 2.945 1.712-1.713-4.657-4.657-4.656 4.656L9.53 10.79ZM4.894 12.001l1.712-1.712L8.319 12l-1.713 1.712L4.894 12ZM9.53 13.21l2.944 2.943 2.945-2.945 1.713 1.71-4.657 4.658-4.657-4.654L9.53 13.21ZM16.626 12l1.712-1.712L20.051 12l-1.713 1.714L16.626 12Z"
                />
                <path
                  fill="#fff"
                  d="m14.21 12-1.738-1.738-1.284 1.284-.149.147-.304.304 1.737 1.736L14.21 12V12Z"
                />
              </svg>
              {chain.name}
            </Button>
            {/* <Button asChild className="py-5 border-input">
                <a href="https://t.me/zilab_technologies" target="_blank">
                  <img
                    src="/images/telegram.svg"
                    alt="telegram"
                    className="h-5 text-white lg:mr-2"
                  />
                  <span className="hidden lg:block">Telegram Support</span>
                </a>
              </Button> */}
          </div>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          {address ? (
            <Button
              onClick={() => open()}
              variant={"outline"}
              className="py-5 border-input"
            >
              {address.slice(0, 6)}...{address.slice(-4)}
            </Button>
          ) : (
            <Button
              className="gap-2 py-5 font-semibold uppercase border border-[#CDFF3A] bg-gradient-to-br from-lime-400 to-lime-700"
              onClick={() => open()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                fill="none"
              >
                <circle cx={13.972} cy={14} r={13.5} fill="#fff" />
                <path
                  fill="url(#a)"
                  d="M21.222 12.047h-.386V9.253c0-.69-.561-1.253-1.25-1.253H8.222c-.69 0-1.25.562-1.25 1.253v1.697a.25.25 0 1 0 .5 0V9.253c0-.415.336-.752.75-.752h11.364c.413 0 .75.338.75.752v3.045c0 .138.112.25.25.25h.636a.25.25 0 0 1 .25.251v2.015a.25.25 0 0 1-.25.25h-2.807a1.258 1.258 0 0 1 0-2.516h.901a.25.25 0 0 0 0-.5h-.9a1.76 1.76 0 0 0 0 3.518h1.92v2.794a.752.752 0 0 1-.75.752H8.222a.752.752 0 0 1-.75-.752V15.81h.986l.47 1.106a.25.25 0 0 0 .23.153h1.208a1 1 0 0 0 .963.746 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.967.758h-1.04l-.47-1.106a.25.25 0 0 0-.23-.153h-1.15v-1.253h2.892a1 1 0 0 0 .964.752 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.964.752H7.472v-1.253h1.15c.101 0 .192-.06.23-.153l.47-1.106h1.04a1 1 0 0 0 .966.758 1.002 1.002 0 0 0 0-2.005 1 1 0 0 0-.962.746H9.158c-.1 0-.191.06-.23.152l-.47 1.107H7.222a.25.25 0 0 0-.25.25v6.308c0 .69.56 1.253 1.25 1.253h11.364c.689 0 1.25-.562 1.25-1.253v-2.794h.386c.414 0 .75-.338.75-.752v-2.015a.752.752 0 0 0-.75-.752Zm-9.894 4.266a.501.501 0 1 1-.002 1.002.501.501 0 0 1 .002-1.002Zm0-3.008a.501.501 0 1 1-.002 1.003.501.501 0 0 1 .002-1.003Zm0-3.007a.501.501 0 1 1-.002 1.002.501.501 0 0 1 .002-1.002Z"
                />
                <path
                  fill="url(#b)"
                  d="M18.101 13.806c0 .534.543.968 1.21.968.667 0 1.21-.434 1.21-.968 0-.533-.543-.967-1.21-.967-.667 0-1.21.434-1.21.967Zm1.815 0c0 .267-.272.484-.605.484-.334 0-.605-.217-.605-.484 0-.266.271-.483.605-.483.333 0 .605.216.605.483Z"
                />
                <defs>
                  <linearGradient
                    id="a"
                    x1={3.78}
                    x2={17.02}
                    y1={-0.015}
                    y2={24.626}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CDFF3A" />
                    <stop offset={0.765} stopColor="#547000" />
                  </linearGradient>
                  <linearGradient
                    id="b"
                    x1={17.586}
                    x2={19.832}
                    y1={11.503}
                    y2={15.548}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#CDFF3A" />
                    <stop offset={0.765} stopColor="#547000" />
                  </linearGradient>
                </defs>
              </svg>
              Connect Wallet
            </Button>
          )}
          <Button
            className="ml-auto lg:hidden"
            variant={"ghost"}
            size="icon"
            onClick={() => setOpenMenu((state) => !state)}
          >
            <MenuIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
