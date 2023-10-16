// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SavedFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * VQL Query used for this saved filter.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter#filter SavedFilter#filter}
  */
  readonly filter?: string;
  /**
  * Title of the Saved Filter
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter#title SavedFilter#title}
  */
  readonly title: string;
  /**
  * Workspace token to add the saved filter into.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter#workspace_token SavedFilter#workspace_token}
  */
  readonly workspaceToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter vantage_saved_filter}
*/
export class SavedFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_saved_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.4/docs/resources/saved_filter vantage_saved_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SavedFilterConfig
  */
  public constructor(scope: Construct, id: string, config: SavedFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_saved_filter',
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
    this._filter = config.filter;
    this._title = config.title;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
      filter: cdktf.stringToTerraform(this._filter),
      title: cdktf.stringToTerraform(this._title),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }
}
