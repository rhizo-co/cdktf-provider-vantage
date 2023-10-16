// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines how to group costs in the Dashboard.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#date_bin Dashboard#date_bin}
  */
  readonly dateBin?: string;
  /**
  * Determines the date range in the Dashboard. Guaranteed to be set to 'custom' if 'start_date' and 'end_date' are set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#date_interval Dashboard#date_interval}
  */
  readonly dateInterval?: string;
  /**
  * The end date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#end_date Dashboard#end_date}
  */
  readonly endDate?: string;
  /**
  * The start date for the date range for CostReports in the Dashboard. ISO 8601 Formatted. Overwrites 'date_interval' if set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#start_date Dashboard#start_date}
  */
  readonly startDate?: string;
  /**
  * Title of the dashboard
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#title Dashboard#title}
  */
  readonly title: string;
  /**
  * Tokens for widgets present in the dashboard. Currently only cost report tokens are supported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#widget_tokens Dashboard#widget_tokens}
  */
  readonly widgetTokens: string[];
  /**
  * The token for the Workspace the Dashboard is a part of.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard#workspace_token Dashboard#workspace_token}
  */
  readonly workspaceToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard vantage_dashboard}
*/
export class Dashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_dashboard";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/dashboard vantage_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.4',
        providerVersionConstraint: '~> 0.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dateBin = config.dateBin;
    this._dateInterval = config.dateInterval;
    this._endDate = config.endDate;
    this._startDate = config.startDate;
    this._title = config.title;
    this._widgetTokens = config.widgetTokens;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_bin - computed: true, optional: true, required: false
  private _dateBin?: string; 
  public get dateBin() {
    return this.getStringAttribute('date_bin');
  }
  public set dateBin(value: string) {
    this._dateBin = value;
  }
  public resetDateBin() {
    this._dateBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateBinInput() {
    return this._dateBin;
  }

  // date_interval - computed: true, optional: true, required: false
  private _dateInterval?: string; 
  public get dateInterval() {
    return this.getStringAttribute('date_interval');
  }
  public set dateInterval(value: string) {
    this._dateInterval = value;
  }
  public resetDateInterval() {
    this._dateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateIntervalInput() {
    return this._dateInterval;
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // widget_tokens - computed: false, optional: false, required: true
  private _widgetTokens?: string[]; 
  public get widgetTokens() {
    return this.getListAttribute('widget_tokens');
  }
  public set widgetTokens(value: string[]) {
    this._widgetTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetTokensInput() {
    return this._widgetTokens;
  }

  // workspace_token - computed: true, optional: true, required: false
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  public resetWorkspaceToken() {
    this._workspaceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokenInput() {
    return this._workspaceToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date_bin: cdktf.stringToTerraform(this._dateBin),
      date_interval: cdktf.stringToTerraform(this._dateInterval),
      end_date: cdktf.stringToTerraform(this._endDate),
      start_date: cdktf.stringToTerraform(this._startDate),
      title: cdktf.stringToTerraform(this._title),
      widget_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._widgetTokens),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }
}
