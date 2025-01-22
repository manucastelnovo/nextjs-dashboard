import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./button";
import { roboto } from "./fonts";

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg md:w-[480px] md:h-[454px] bg-purple-200 px-6 pb-4 pt-8">
        <h1
          className={`${roboto.className} antialiased w-full font-bold text-4xl mb-8 text-center`}
        >
          Iniciar Sesion
        </h1>
        <div className="w-full">
          <div>
            <div className="relative">
              <input
                className="peer block w-full h-12 mb-4 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="peer block w-full h-12 mb-4 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full">Iniciar Sesión</Button>
        <hr className="mt-8 border-secundaryGray" />
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
        <div className="mt-4 text-center">
          <a
            href="/forgot-password"
            className="text-sm text-black hover:underline"
          >
            ¿Olvidó su contraseña?
          </a>
        </div>
      </div>
    </form>
  );
}
