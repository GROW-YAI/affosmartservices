/// <reference types="vite/client" />

interface importMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string
    readonly VITE_EMAILJS_TEMPLATE_ID: string
    readonly VITE_EMAILJS_PUBLIC_KEY: string

}

interface importMeta {
    readonly env: importMetaEnv
}