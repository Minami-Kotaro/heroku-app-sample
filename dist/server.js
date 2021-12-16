"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const router_1 = __importDefault(require("./router"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(helmet_1.default());
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.use(express_1.default.json());
const port = process.env.PORT || 3000;
app.use("/api/version", router_1.default);
//クライアント
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
exports.default = app.listen(port, () => {
    console.log("App is running at http://localhost:3000");
});
//# sourceMappingURL=server.js.map