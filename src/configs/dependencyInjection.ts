import { container } from "tsyringe";
import { VehicleRepository } from "@/repositories/VehicleRepository";

container.registerSingleton<VehicleRepository>(VehicleRepository);
