import memberRouter from "./src/modules/member/member.routes.js"
import trainerRouter from "./src/modules/trainer/trainer.routes.js"


export function bootstrap(app) {
    app.use( "/trainer", trainerRouter)
    app.use("/member", memberRouter)
}