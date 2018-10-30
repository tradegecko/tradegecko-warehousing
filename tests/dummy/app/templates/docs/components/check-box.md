# Check box states 
 {{#docs-demo as |demo|}}
  {{#demo.example name="check-box"}}
    {{tradegecko-ui-checkbox
      label="Click Me"
      checked=checked
      onChange=(action (mut checked))
    }}
  {{/demo.example}}
  {{#demo.example name="check-box-disabled"}}
    {{tradegecko-ui-checkbox
      label="Disabled"
      disabled=true
    }}
  {{/demo.example}}
   {{demo.snippet "check-box" label="enabled.hbs"}}
  {{demo.snippet "check-box-disabled" label="disabled.hbs"}}
{{/docs-demo}}
