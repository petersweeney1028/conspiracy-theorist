import { Conspiracy, Status } from "./types";

import mkUltra from "@/data/conspiracies/mk-ultra.json";
import cointelpro from "@/data/conspiracies/cointelpro.json";
import operationNorthwoods from "@/data/conspiracies/operation-northwoods.json";
import nsaPrism from "@/data/conspiracies/nsa-prism.json";
import tobaccoCancer from "@/data/conspiracies/tobacco-cancer.json";
import tuskegee from "@/data/conspiracies/tuskegee.json";
import gulfOfTonkin from "@/data/conspiracies/gulf-of-tonkin.json";
import epsteinNetwork from "@/data/conspiracies/epstein-network.json";
import covidLabLeak from "@/data/conspiracies/covid-lab-leak.json";
import uapPhenomena from "@/data/conspiracies/uap-phenomena.json";
import chemtrails from "@/data/conspiracies/chemtrails.json";
import moonLandingHoax from "@/data/conspiracies/moon-landing-hoax.json";
import flintWater from "@/data/conspiracies/flint-water.json";
import opioidCrisis from "@/data/conspiracies/opioid-crisis.json";
import iranContra from "@/data/conspiracies/iran-contra.json";
import iraqWmds from "@/data/conspiracies/iraq-wmds.json";
import operationMockingbird from "@/data/conspiracies/operation-mockingbird.json";
import jfkAssassination from "@/data/conspiracies/jfk-assassination.json";
import havanaSyndrome from "@/data/conspiracies/havana-syndrome.json";
import saudi911 from "@/data/conspiracies/saudi-911.json";
import ussLiberty from "@/data/conspiracies/uss-liberty.json";
import operationAjax from "@/data/conspiracies/operation-ajax.json";
import usaidCia from "@/data/conspiracies/usaid-cia.json";
import fluorideSafety from "@/data/conspiracies/fluoride-safety.json";
import pharmaResearchSuppression from "@/data/conspiracies/pharma-research-suppression.json";

const allConspiracies: Conspiracy[] = [
  mkUltra,
  cointelpro,
  operationNorthwoods,
  operationMockingbird,
  operationAjax,
  nsaPrism,
  tobaccoCancer,
  tuskegee,
  gulfOfTonkin,
  ussLiberty,
  iranContra,
  iraqWmds,
  flintWater,
  opioidCrisis,
  pharmaResearchSuppression,
  usaidCia,
  epsteinNetwork,
  covidLabLeak,
  uapPhenomena,
  jfkAssassination,
  havanaSyndrome,
  saudi911,
  fluorideSafety,
  chemtrails,
  moonLandingHoax,
] as Conspiracy[];

export function getAllConspiracies(): Conspiracy[] {
  return allConspiracies;
}

export function getConspiracyBySlug(slug: string): Conspiracy | undefined {
  return allConspiracies.find((c) => c.slug === slug);
}

export function getScorecard(): {
  confirmed: number;
  unresolved: number;
  debunked: number;
  total: number;
  confirmationRate: number;
} {
  const confirmed = allConspiracies.filter(
    (c) => c.status === "CONFIRMED"
  ).length;
  const unresolved = allConspiracies.filter(
    (c) => c.status === "UNRESOLVED"
  ).length;
  const debunked = allConspiracies.filter(
    (c) => c.status === "DEBUNKED"
  ).length;
  const total = allConspiracies.length;
  const closedCases = confirmed + debunked;
  const confirmationRate =
    closedCases > 0 ? Math.round((confirmed / closedCases) * 100) : 0;

  return { confirmed, unresolved, debunked, total, confirmationRate };
}

export function filterConspiracies(
  conspiracies: Conspiracy[],
  status?: Status,
  category?: string
): Conspiracy[] {
  let result = conspiracies;

  if (status) {
    result = result.filter((c) => c.status === status);
  }

  if (category) {
    result = result.filter((c) => c.category.includes(category));
  }

  return result;
}
