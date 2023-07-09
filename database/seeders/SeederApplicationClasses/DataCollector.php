<?php

namespace Database\Seeders\SeederApplicationClasses;

use PHPUnit\Logging\Exception;

trait DataCollector
{
    public function collect($sheetData): array
    {
        //initialise variables
        $columnNames = array();

        $aggregatedData = [];

        $terminate = false;

        //validate that there is data in the sheet being used
        if (!($this->validator($sheetData))) {
            throw new Exception("Sheet was Empty");
        }

        foreach ($sheetData->getRowIterator() as $row) {
            $rowNumber = $row->getRowIndex();
            $data_row = [];


            if ($rowNumber == 1) {
                $columnNames = $this->extractColumnNames($row);
            } else {
                $first_cell_value = $sheetData->getCell('A'.$rowNumber)->getValue();

                if($first_cell_value == null){
                    break;
                }else{
                    $transformedData = $this->bindData($columnNames,$row);

                    array_push($aggregatedData, $transformedData);
                }
            }
        }
        return $aggregatedData;
    }

    public function validator($sheetData): bool
    {
        return (
            isset($sheetData) &&
            $sheetData != null
        );
    }

    public function extractColumnNames($row): array
    {
        $columnNames = [];

        foreach ($row->getCellIterator() as $cell) {
            // Get the column index (A, B, C, ...)
            $columnIndex = $cell->getColumn();

            // Get the cell value
            $cellValue = $cell->getValue();

            $columnNames[$columnIndex] = $cellValue;
        }

        return $columnNames;
    }

    public function bindData($columnData,$rowData): array
    {

        $data_row = [];

        foreach ($rowData->getCellIterator() as $cell) {
            // Get the column index (A, B, C, ...)
            $columnIndex = $cell->getColumn();

            // Get the cell value
            $cellValue = $cell->getValue();

            foreach ($columnData as $key => $value) {
                if ($key == $columnIndex) {
                    $data_row[$value] = $cellValue;
                }
            }
        }

        return $data_row;
    }

}
