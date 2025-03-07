export interface RootObject {
  name: string;
  tags: Tags;
}

interface Tags {
  Backup: Backup;
  Battery: Battery;
  ControllableLoad: Backup;
  DA: Backup;
  DCM: DCM;
  Deferral: Backup;
  DieselGenset: Backup;
  DR: Backup;
  ElectricVehicle1: Backup;
  ElectricVehicle2: Backup;
  Finance: Finance;
  FR: Backup;
  ICE: Backup;
  LF: Backup;
  NSR: Backup;
  PV: PV;
  RA: Backup;
  Reliability: Reliability;
  Results: Results;
  retailTimeShift: DCM;
  Scenario: Scenario;
  SR: Backup;
  User: Backup;
}

interface Scenario {
  "": _6;
}

interface _6 {
  active: string;
  keys: Keys7;
}

interface Keys7 {
  activate_electricity_load_dump: OMexpenses;
  apply_interconnection_constraints: OMexpenses;
  binary: OMexpenses;
  def_growth: OMexpenses;
  dt: OMexpenses;
  end_year: OMexpenses;
  incl_site_load: OMexpenses;
  incl_thermal_load: OMexpenses;
  kappa_ch_max: OMexpenses;
  kappa_ch_min: OMexpenses;
  kappa_dis_max: OMexpenses;
  kappa_dis_min: OMexpenses;
  kappa_ene_max: OMexpenses;
  kappa_ene_min: OMexpenses;
  location: OMexpenses;
  max_export: OMexpenses;
  max_import: OMexpenses;
  monthly_data_filename: OMexpenses;
  n: OMexpenses;
  opt_years: OMexpenses;
  ownership: OMexpenses;
  slack: OMexpenses;
  start_year: OMexpenses;
  time_series_filename: OMexpenses;
  verbose: OMexpenses;
  verbose_opt: OMexpenses;
}

interface Results {
  "": _5;
}

interface _5 {
  active: string;
  keys: Keys6;
}

interface Keys6 {
  dir_absolute_path: OMexpenses;
  errors_log_path: OMexpenses;
  label: OMexpenses;
}

interface Reliability {
  "": _4;
}

interface _4 {
  active: string;
  keys: Keys5;
}

interface Keys5 {
  max_outage_duration: OMexpenses;
  "n-2": OMexpenses;
  post_facto_initial_soc: OMexpenses;
  post_facto_only: OMexpenses;
  target: OMexpenses;
  load_shed_percentage: OMexpenses;
  load_shed_perc_filename: OMexpenses;
}

interface PV {
  "6ae6c43d-71c0-42ea-a574-c217e6b56753": _6ae6c43d71c042eaa574c217e6b56753;
}

interface _6ae6c43d71c042eaa574c217e6b56753 {
  active: string;
  keys: Keys4;
}

interface Keys4 {
  ccost_kW: OMexpenses;
  construction_year: OMexpenses;
  curtail: OMexpenses;
  decommissioning_cost: OMexpenses;
  "ecc%": OMexpenses;
  expected_lifetime: OMexpenses;
  fixed_om_cost: OMexpenses;
  gamma: OMexpenses;
  grid_charge: OMexpenses;
  grid_charge_penalty: OMexpenses;
  growth: OMexpenses;
  inv_max: OMexpenses;
  loc: OMexpenses;
  macrs_term: OMexpenses;
  max_rated_capacity: OMexpenses;
  min_rated_capacity: OMexpenses;
  name: OMexpenses;
  nsr_response_time: OMexpenses;
  nu: OMexpenses;
  operation_year: OMexpenses;
  PPA: OMexpenses;
  PPA_cost: OMexpenses;
  PPA_inflation_rate: OMexpenses;
  rated_capacity: OMexpenses;
  rcost_kW: OMexpenses;
  replaceable: OMexpenses;
  replacement_construction_time: OMexpenses;
  salvage_value: OMexpenses;
  sr_response_time: OMexpenses;
  startup_time: OMexpenses;
  ter: OMexpenses;
}

interface Finance {
  "": _3;
}

interface _3 {
  active: string;
  keys: Keys3;
}

interface Keys3 {
  analysis_horizon_mode: OMexpenses;
  customer_tariff_filename: OMexpenses;
  ecc_mode: OMexpenses;
  external_incentives: OMexpenses;
  federal_tax_rate: OMexpenses;
  fuel_price_gas: OMexpenses;
  fuel_price_liquid: OMexpenses;
  fuel_price_other: OMexpenses;
  inflation_rate: OMexpenses;
  npv_discount_rate: OMexpenses;
  property_tax_rate: OMexpenses;
  state_tax_rate: OMexpenses;
  yearly_data_filename: OMexpenses;
}

interface DCM {
  "": _2;
}

interface _2 {
  active: string;
  keys: Keys2;
}

interface Keys2 {
  growth: OMexpenses;
}

interface Battery {
  "10487cf5-16d9-4b78-8109-440b29e1ef78": _10487cf516d94b788109440b29e1ef78;
}

interface _10487cf516d94b788109440b29e1ef78 {
  active: string;
  keys: Keys;
}

interface Keys {
  OMexpenses: OMexpenses;
  ccost: OMexpenses;
  ccost_kW: OMexpenses;
  ccost_kWh: OMexpenses;
  ch_max_rated: OMexpenses;
  ch_min_rated: OMexpenses;
  construction_year: OMexpenses;
  cycle_life_filename: OMexpenses;
  cycle_life_table_eol_condition: OMexpenses;
  daily_cycle_limit: OMexpenses;
  decommissioning_cost: OMexpenses;
  dis_max_rated: OMexpenses;
  dis_min_rated: OMexpenses;
  duration_max: OMexpenses;
  "ecc%": OMexpenses;
  ene_max_rated: OMexpenses;
  expected_lifetime: OMexpenses;
  fixedOM: OMexpenses;
  hp: OMexpenses;
  incl_cycle_degrade: OMexpenses;
  incl_ts_charge_limits: OMexpenses;
  incl_ts_discharge_limits: OMexpenses;
  incl_ts_energy_limits: OMexpenses;
  llsoc: OMexpenses;
  macrs_term: OMexpenses;
  name: OMexpenses;
  nsr_response_time: OMexpenses;
  operation_year: OMexpenses;
  p_start_ch: OMexpenses;
  p_start_dis: OMexpenses;
  rcost: OMexpenses;
  rcost_kW: OMexpenses;
  rcost_kWh: OMexpenses;
  replaceable: OMexpenses;
  replacement_construction_time: OMexpenses;
  rte: OMexpenses;
  salvage_value: OMexpenses;
  sdr: OMexpenses;
  soc_target: OMexpenses;
  sr_response_time: OMexpenses;
  startup: OMexpenses;
  startup_time: OMexpenses;
  state_of_health: OMexpenses;
  ter: OMexpenses;
  ulsoc: OMexpenses;
  user_ch_rated_max: OMexpenses;
  user_ch_rated_min: OMexpenses;
  user_dis_rated_max: OMexpenses;
  user_dis_rated_min: OMexpenses;
  user_ene_rated_max: OMexpenses;
  user_ene_rated_min: OMexpenses;
  yearly_degrade: OMexpenses;
}

interface OMexpenses {
  opt_value: string;
  sensitivity: Sensitivity;
  type: string;
}

interface Sensitivity {
  active: string;
  coupled: string;
  value: string;
}

interface Backup {
  "": _;
}

interface _ {
  active: string;
}

export interface IFile {
  filename: string;
  url: string;
}
