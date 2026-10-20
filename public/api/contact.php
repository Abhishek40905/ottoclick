<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed. Use POST.']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON payload.']);
    exit;
}

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$phone = trim($data['phone'] ?? '');
$company = trim($data['company'] ?? '');
$city = trim($data['city'] ?? '');
$project_type = trim($data['project_type'] ?? '');
$solution_required = trim($data['solution_required'] ?? '');
$budget = trim($data['budget'] ?? '');
$message = trim($data['message'] ?? '');

if (empty($name) || empty($email) || empty($phone)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Name, email, and phone number are required.']);
    exit;
}

// Log inquiry to file
$logEntry = date('Y-m-d H:i:s') . " | $name | $email | $phone | $solution_required | $budget | $city\n";
@file_put_contents(__DIR__ . '/inquiries.log', $logEntry, FILE_APPEND);

// Optional: send email notification
$to = 'support@ottoclick.in';
$subject = "New Inquiry from $name - Ottoclick";
$emailContent = "Name: $name\nEmail: $email\nPhone: $phone\nCompany: $company\nCity: $city\nProject Type: $project_type\nSolution: $solution_required\nBudget: $budget\n\nMessage:\n$message\n";
$headers = "From: noreply@" . ($_SERVER['HTTP_HOST'] ?? 'ottoclick.in') . "\r\nReply-To: $email\r\n";

@mail($to, $subject, $emailContent, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your enquiry has been received.',
    'data' => [
        'name' => $name,
    ]
]);
