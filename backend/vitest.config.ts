import path from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
    resolve:{
        alias: {
            "@/test": path.resolve(__dirname, "test"),
            "@/core": path.resolve(__dirname, "src/core"),
            "@/domain": path.resolve(__dirname, "src/domain"),
            "@/shared": path.resolve(__dirname, "src/shared")
        }
    },
    test:{
        globals:true,
        environment:"node",
        include:["test/**/*.spec.ts"]
    }
})