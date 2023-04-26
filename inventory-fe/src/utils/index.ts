// From stackoverflow: https://stackoverflow.com/a/45899308

const CUSTOMEPOCH = 1300000000000;

// Generate a unique ID for a row in a dynamoDB table
/*
  The ID is a 64-bit integer, composed of:
  - 42 bits for the timestamp in milliseconds (custom epoch)
  - 10 bits for the shard ID
  - 12 bits for a random number
*/
export function generateRowId(randomizer: number) {
  let ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent
  const randid = Math.floor(Math.random() * 512); // limit to 512
  ts = (ts * 64);   // bit-shift << 6
  ts = ts + randomizer;
  return (ts * 512) + randid;
}