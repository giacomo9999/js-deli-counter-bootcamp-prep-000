function takeANumber(katzDeli, new_cust)
{
  console.log(new_cust);
  katzDeli.push(new_cust);
  return `Welcome, ${new_cust}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli)
{
  console.log (katzDeli);
  if (katzDeli[0] === undefined)
    return 'There is nobody waiting to be served!'
  else
    return `Currently serving ${katzDeli.shift()}.`;
}
