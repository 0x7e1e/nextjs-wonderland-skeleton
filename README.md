# Wonderland Finance frontend + Next.js experiment

**Integrating with the codebase, and no `window is undefined` error**

## Notes:

The key file in this project is (web3-context.tsx)[./hooks/web3/web3-context.tsx]. `web3Modal` has a reliance on the `window` browser object. But since Next.js only provides that to effectful code, it needs to be called only when `window` can exist: inside an effectful code block, like `useEffect`. The major code block is this:

```javascript

//////////////// WINDOW CHECK ///////////////////////
// Because Next.js provides client code access to `window`
// during dynamic/effectful code, we need to set `web3Modal` with
// `useEffect`. Also, defensively checking for window, again, in the 
// conditional (`typeof window !== undefined`).
const [web3Modal, setWeb3Modal] = useState<null | Web3Modal>(null);

useEffect(() => {
  if (typeof window !== undefined) {
    setWeb3Modal(new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              [Networks.AVAX]: getMainnetURI(),
            },
          },
        },
      },
    }))
  }
}, []);
//////////////// END WINDOW CHECK ///////////////////////

```

**Not included**
- integration with state
- the sushi-fork codebase

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

