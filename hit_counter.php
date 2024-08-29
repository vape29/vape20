<?php
// Path to the file where hit count is stored
$filename = 'hit_count.txt';

// Check if the file exists, if not create it with initial count
if (!file_exists($filename)) {
    file_put_contents($filename, '0');
}

// Read the current hit count from the file
$count = (int)file_get_contents($filename);

// Increment the count
$count++;

// Write the updated count back to the file
file_put_contents($filename, $count);

// Output the current hit count
echo $count;
?>
