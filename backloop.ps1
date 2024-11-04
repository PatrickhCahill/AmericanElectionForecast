$startDate = Get-Date "21-07-2024"
$endDate = Get-Date "07-09-2024"

for($i = $startDate; $i -le $endDate; $i = $i.AddDays(1))
{
    Write-Output "---`n`n Starting:`n$($i.ToString("dd-MM-yyyy")) `n`n---"

    Set-Content -Path "src/datefile.txt" -Value $i.ToString("dd-MM-yyyy")
    jupyter execute src\polling_vals.ipynb 
    jupyter execute src\model_and_plots.ipynb

    Write-Output "---`n`n Ending:`n$($i.ToString("dd-MM-yyyy")) `n`n---"
}

jupyter execute src\facts_over_time.ipynb
