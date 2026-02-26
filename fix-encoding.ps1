$files = @(
  "index.html",
  "discipline.html",
  "disputes.html",
  "liability.html",
  "styles.css",
  "script.js"
)

foreach ($f in $files) {
  $raw = Get-Content -Raw -Encoding Default $f
  Set-Content -Encoding utf8 $f $raw
}
