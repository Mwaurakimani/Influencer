<?php

namespace App\Console\Commands;

use App\Http\HelperClasses\UsersClass\MarketerClass;
use Illuminate\Console\Command;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Reader\Exception;

class syncdata extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'syncdata';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';
    private \PhpOffice\PhpSpreadsheet\Spreadsheet $workBook;

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            $reader = IOFactory::createReader('Xlsx');
        } catch (Exception $e) {
            dd($e);
        }
        $this->workBook = $reader->load("./database/Data/TestData/data_dump.xlsx");

        $this->syncUsers();
    }
}

